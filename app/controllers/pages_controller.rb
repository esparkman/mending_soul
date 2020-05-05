class PagesController < ApplicationController
  layout 'splash', only: :splash
  def index
  end

  def splash
  end
end
