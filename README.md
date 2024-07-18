# CS320-BTSTORE
## For Customer
- After logging in to the site as a customer, the user is directed to the "ShoppingPage" page, where
the user can search for products or select products from the catalog, add the selected products
to the cart or access the product page.
- The customer is redirected to the "OrderPage" page with the orderBasket() button and browses
the products in the basket there again, and then goes to the "PaymentPage" page to make the
payment and complete the order, and when the order is completed, the basket is emptied and a
confirmation e-mail is sent.
- In addition, the customer can update the user information by using the "showProfile" button to
switch from the "ShoppingPage" page to the "ProfilePage" page.
## For Artist
- After logging in to the site as an artist , the artist is redirected to the "Dashboard" page, on this
page, the artist views his existing products, clicks on the products he wants to edit or delete and
is redirected to the "ProductPage" page, on this page he can edit the product with the
editProduct() button or delete it directly with the removeProduct() button, each action is
updated in the database.
- Also on this page the artist is redirected to the “createNewProduct” page with the
createNewProduct() method and on this page the artist can create a new product with the
listAnewProduct() method, each created product is updated in the database.
Finally, the artist can update their own information by going to the "ProfilePage" from the
"Dashboard" p
