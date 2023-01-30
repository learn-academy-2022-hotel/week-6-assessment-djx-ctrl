# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: From my knowledge without research I do not have the answer.

Researched answer: From researching this question to fix this mistake you will have to create a migration to update the database. The foreign key would be on the Cohort model.

2. Which RESTful routes must always be passed params? Why?

Your answer: THe RESTful routes that must be passes always are Show, New & Create.

Researched answer: Show, New, & Create are RESTful routes that must always be passed in params becuase they are responsible for providing mapping between HTTP verbs, controller actions and CRUD operation in the application. Rails requires RESTful naming conventions to be followed.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are model, migration, rspec:install. From my knowledge I do not recall at the moment the specifics of what is created by each.

Researched answer:Three rails generator commands are rails generate model which generates a new model with name of the model, name of each column and data type in each column. Second is rails generate migration which will generate a new file in the migration directory. Lastly rails generate rspec:install ensures before the model is created the dependencies for RSpec is installed.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - students#index displays a list of all students

action: "POST" location: /students - students#create creates a new student

action: "GET" location: /students/new - students#new returns html for creating new student

action: "GET" location: /students/2 - students#show displays a particular student

action: "GET" location: /students/2/edit - students#edit returns html for editing a student 

action: "PATCH" location: /students/2 - students#update updates a particular student

action: "DELETE" location: /students/2 - students#destroy deletes a particular student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

<!-- *** Confused on how to complete this question. I read over the link provided and referenced to the syllabus. *** -->
