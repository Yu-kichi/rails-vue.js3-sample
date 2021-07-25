class Api::BooksController < ApplicationController
  def index

    result_values = {
      "東京": [
        "犬猫病院","猿しか病院","東京病院"
      ],
      "新潟": [
        "新潟病院"
      ],
      "岩手":[
        "猫クリニック","岩手病院"
      ]
    }
    render json: result_values
  end
end
