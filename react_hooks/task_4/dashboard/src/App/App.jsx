import React, { useState, useCallback } from 'react';
import Notifications from '../Notifications/Notifications.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import WithLogging from '../HOC/WithLogging.jsx';
import newContext from '../Context/context.js';

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

function App() {
  const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(newContext._currentValue.user);
  const [notifications, setNotifications] = useState(notificationsList);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: '', password: '', isLoggedIn: false });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  return (
    <newContext.Provider value={{ user, logOut }}>
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
          <CourseListWithLogging courses={coursesList} />
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
