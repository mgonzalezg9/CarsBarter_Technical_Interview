# CarsBarter Technical Test

## Details

The main view should display a directory of car dealers with the following features:

- You can check [https://www.autocasion.com/concesionarios](https://www.autocasion.com/concesionarios)
- Searcher

  - Filter by name
  - Filter by location
  - Order by name
  - Generate url ?order=relevancia

  ![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf34d156-a6f3-495a-9a23-e223dcf91d48/Screen_Shot_2021-05-11_at_6.24.02_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132421Z&X-Amz-Expires=86400&X-Amz-Signature=b636ce473ac94cc71bd75926e230aaec334f7733237bf9f3d128a851cb5a64ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.24.02_PM.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf34d156-a6f3-495a-9a23-e223dcf91d48/Screen_Shot_2021-05-11_at_6.24.02_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132421Z&X-Amz-Expires=86400&X-Amz-Signature=b636ce473ac94cc71bd75926e230aaec334f7733237bf9f3d128a851cb5a64ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.24.02_PM.png%22)

- Pagination

  - Generate url like ⇒ ?order=nearest&page=3

  ![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3ea100ac-6840-4ede-87b2-686846cb99a4/Screen_Shot_2021-05-11_at_6.24.40_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132440Z&X-Amz-Expires=86400&X-Amz-Signature=5e14863f47efc2eff2225b99ae22a809b84b5ab659e41216d5792867125b7877&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.24.40_PM.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3ea100ac-6840-4ede-87b2-686846cb99a4/Screen_Shot_2021-05-11_at_6.24.40_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132440Z&X-Amz-Expires=86400&X-Amz-Signature=5e14863f47efc2eff2225b99ae22a809b84b5ab659e41216d5792867125b7877&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.24.40_PM.png%22)

- Product details [https://www.autocasion.com/profesional/automoviles-avenida-1573295](https://www.autocasion.com/profesional/automoviles-avenida-1573295) (It is required to change url, so we can use the url to go directly to the page)
- Tabs in product details (Change content by javascript, do not change the url).

  ![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc67c98f-7979-4d85-9376-2e1acc435a01/Screen_Shot_2021-05-11_at_6.26.23_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132443Z&X-Amz-Expires=86400&X-Amz-Signature=0b045f4faf4971fa481a54b2891061e70d14e2d2bd84e1ba6590b44876e7d92a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.26.23_PM.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc67c98f-7979-4d85-9376-2e1acc435a01/Screen_Shot_2021-05-11_at_6.26.23_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210513T132443Z&X-Amz-Expires=86400&X-Amz-Signature=0b045f4faf4971fa481a54b2891061e70d14e2d2bd84e1ba6590b44876e7d92a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Shot_2021-05-11_at_6.26.23_PM.png%22)

- **(Extra)** Contact form: Create a contact form and send an email with the business information to your email. (Nodemailer)
- **(Extra)** Create a form in each product detail to add a comment to the business. (Name, Rating, comment)

NOTES:

- Add instructions about how to run the application.
- You can use some solution like JSON-Server for giving persistence to your app.

## What we are looking for:

- The goal of this exercise is to prove the applicant's ability to work with:
  - HTML
  - CSS
  - Javascript
  - React
  - REST
- Pay attention about how your code is organized.
- How you are reflecting the domain in the code. Be careful with the separation of concerns between the UI and the business logic.
- We love clean code.
- We don't think 100% of code coverage is a must, but we love tests.
- You are not intended to be proven as a designer. The provided mockups are just a guideline, feel free to build whatever you want.
- We are looking forward to seeing your code and discuss with you your solution.

This is the link that contains a CSV file you have to use to populate the database ([https://docs.google.com/spreadsheets/d/1G955xD6zzWKXSLcLAGSWqSuSA48L1FHOIh4vvYmlgpg/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1G955xD6zzWKXSLcLAGSWqSuSA48L1FHOIh4vvYmlgpg/edit?usp=sharing))
