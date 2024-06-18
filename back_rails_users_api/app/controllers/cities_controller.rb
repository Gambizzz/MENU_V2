class CitiesController < ApplicationController
  def index
    location = params[:location] || '46.603354,1.888334'

    uri = URI.parse("https://maps.googleapis.com/maps/api/place/nearbysearch/json")
    uri.query = URI.encode_www_form({
      location: location,
      type: 'locality',
      key: ENV['MAPS_API_KEY']
    })

     puts "URI: #{uri}"
     
    response = Net::HTTP.get_response(uri)
    if response.is_a?(Net::HTTPSuccess)
      render json: JSON.parse(response.body)['results'].map { |place| place['name'] }.uniq
    else
      render json: { error: response.message }, status: :bad_request
    end
  end
end
