// !PERN Stack Course - Build a Yelp clone (Postgres, Express, React, Node.js) -> {freeCodeCamp}
// https://www.youtube.com/watch?v=J01rYl9T3BU&t=69s
// !https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-pern-stack-4fc18a1e5937
/*
!PERN Stack Course - Postgres, Express, React, and Node
00:00 Intro
04:11 PERN Stack Intro
07:58 Postgres Windows Install
16:35 Postgres Mac install
29:13 Postgres Documentation
30:29 PSQL Basics
37:04 SQL Tables
38:53 Create Table
45:55 Modify Tables
48:28 Delete Databases
50:58 Yelp Project Database
01:09:57 Node Setup
01:12:45 Express Setup
01:15:57 Environment Variables
01:19:40 First Express Route
01:29:27 Restful API Convention
01:32:33 Configure all routes
01:42:34 Express Middleware
01:54:13 Finishing Up Routes
02:03:10 Connect Express and Postgres
02:14:20 Get all Restaurants Route
2:18:25 Gone one Restaurant Route
02:28:23 Create a Restaurant Route
02:35:28 Update A Restaurant Route
02:43:07 Delete A Restaurant Route
02:46:28 React Setup
02:52:52 React Router Setup
03:02:03 HomePage Layout
03:14:24 React Context API
03:20:17 Fetching Data
03:36:12 Rendering Restaurants
03:41:48 Adding Restaurants
03:56:26 Deleting Restaurants
04:03:05 Updating Restaurants
04:26:18 Detail Page
04:38:06 Reviews Intro
04:39:46 Reviews Postgres Table
04:55:20 Star Rating Component
05:02:49 Reviews Component Layout
05:08:18 Add Review
05:29:06 Add Review Express Route
05:37:43 Add Review React Component
05:48:04 Postgres Aggregate Functions
05:57:26 SQL Joins and Wrapping up App
*/

//! 2:52:52
// For anyone watching in late 2021, <Switch> has been replaced by <Routes>, and component has been replaced by element in the Route tag, example: <Route exact path="/" element={<Home/>} />

// At 3:08:42  you mention the alignment of the price range drop down. This is because you added the  <select className="custom-select my-1 mr-sm-2"> and my-1 adds a top and bottom margin, and mr adds margin right. The other elements in the row are not similarly adjusted. If you declare <select className="custom-select"> then it render perfectly.

// if your content does not get displayed around 2:57:48, do this <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/restaurants/:id/update" element={<UpdatePage/>} />
//           <Route path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
//         </Routes>
//       </Router>

// For the people in 2022 at 3:00:00 the routes now are this:
// return <div>
//         <Router>
//             <Routes>
//             <Route exact path="/" element={<Home/>} />
//             <Route exact path="/restaurants/:id" element={<RestaurantDetailPage/>} />
//             <Route exact path="/restaurants/:id/update" element={<Update/>} />
//             </Routes>
//         </Router>
//     </div>
/*
ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

CREATE DATABASE yelp;

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) VALUES (123, 'mcdonalds', 'new york', 3);

npm install dotenv

npm install morgan --> 4 middleware

!Stopped at 1:51:55

*/
