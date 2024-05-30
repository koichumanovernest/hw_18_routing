import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "../pages/Menu";
import Materials from "../pages/Materials";
import Students from "../pages/Students";
import Ratings from "../pages/Ratings";
import Courses from "../pages/Courses";
import Announcements from "../pages/Announcements";
import Notifications from "../pages/Notifications";
import Schedule from "../pages/Schedule";
import DetailsStudent1 from "../pages/DetailsStudent1";
import DetailsStudent2 from "../pages/DetailsStudent2";
import StudentsDetails from "../pages/StudentsDetails";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/courses",
          element: <Courses />,
          children: [
            {
              path: "/courses/materials",
              element: <Materials />,
            },
            {
              path: "/courses/students",
              element: <Students />,
            },
            {
              path: "/courses/students/details",
              element: <StudentsDetails />,
              children: [
                {
                  path: "/courses/students/details/1",
                  element: <DetailsStudent1 />,
                },
                {
                  path: "/courses/students/details/2",
                  element: <DetailsStudent2 />,
                },
              ],
            },
            {
              path: "/courses/ratings",
              element: <Ratings />,
            },
          ],
        },
        {
          path: "/announcements",
          element: <Announcements />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
