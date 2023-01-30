# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
  # - line 10 is showing the class BlogPosts controller and line 11 creating a index method which is a get request.
    # ---2)
    @posts = BlogPost.all
  end
  # - line 14 is sayins we want access to all the posts from model Blogpost and line 15 is every def has a end.
  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end
  # - line 18 thru 20 is a show method and is accessing the id of the item. inside the method we are making an active record call to find an item by id. this is a get request that will show the particular item.
  # ---4)
  def new
    @post = BlogPost.new
  end
  # - line 23 thru 25 is a new method created for the user to have the ability to add a new blog post.
  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
  # - line 29 thru 33 is conditional statement that was created to allow for a redirect once a new entry in the database is completed successfully.
  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end
  # - line 37 thru 38 allows user to access the id of a particular item that needs to be edited.
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
  # - line 43 thru 47 is calling on post to update and if valid once submitted redirect the page so that it reflects the update.
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end
  # - line 53 thru 55 saying redirect back to blog posts path when a post is deleted.
  # ---9)
  private
  def blog_post_params
  # - line 58 thru 59 the keyword private is created when the strong params method is called by the active record create action.Everything below private is protected by that keyword.
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
  # - line 62 thru 64 the require method is requiring blog_post to be passed in to be present in create or update method. permit method is allowing title and content to be present.