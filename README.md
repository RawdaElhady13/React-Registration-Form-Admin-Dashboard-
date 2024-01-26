This Project Consist of:
-Authentication and Authorization Login and Register pages with the errors that may be occurs during the Sumbit and using (axios Post )to send the UsersData to the database 
 ,after send the data ,it stored in (Context and Cookies) and (Access Token) created so I can used it in any page in the project without using props And Avoiding the Props Drilling
-Dasdboard Page contain Users,New User and UpdateUser by Using (reacr-router-dom Package) that Contains {Browser Routes ,Routes, Route>=nested-Route,NavLink}
 Anyone Can't Reach this Pages Without login So I created RequireAuth Page to do that by check the Access Token in the Cookie 
-Users Page contains the data of each user by Using API Fetch (axios get) that brought the data from Database And I can delete the User by Using (axios delete )
-In the Update Page I used the Id of each User to get his data and Update it then send the update data to the database again by using axios Post 
 using (Refresh Token) when the site refreshed to get anew Token to Provide (More Secuirty to the Website)
 in the Update And Create Pages I Used A Component Forms with The Props to get a clean Code .
 

