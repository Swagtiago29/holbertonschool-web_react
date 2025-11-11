import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Notifications from '../Notifications/Notifications.jsx';
import axios from "axios";
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import WithLogging from '../HOC/WithLogging.jsx';
import newContext from '../Context/context.js';
import { getLatestNotification } from '../utils/utils.js';

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

function App() {

  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [notifications, setNotifications] = useState('');
  const [courses, setCourses] = useState('')
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/notifications.json")
        const data = response.data

        const latest = getLatestNotification();
        setNotifications([...data])
      }
      catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    }
    fetchNotifications()
  }, [])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses.json");
        setCourses(response.data);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Failed to fetch courses:", error);
        }
      }

    };

    fetchCourses();
  }, [user]);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, [setUser]);

  const logOut = useCallback(() => {
    setUser({ email: '', password: '', isLoggedIn: false });
  }, [setUser]);

  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    console.log('xd')
  }, [setNotifications]);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, [setDisplayDrawer]);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, [setDisplayDrawer]);

  const contextValue = useMemo(() => ({ user, logOut }), [user, logOut]);

  return (
    <newContext.Provider value={contextValue}>
      <Notifications
        notifications={notifications}
        displayDrawer={displayDrawer}
        markNotificationAsRead={markNotificationAsRead}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
      <Header />
      {user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseListWithLogging courses={courses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <LoginWithLogging logIn={logIn} />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>
          ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores architecto blanditiis fuga
          doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae,
          quia dicta?
        </p>
      </BodySection>
      <Footer />
    </newContext.Provider>
  );
}

export default App;
