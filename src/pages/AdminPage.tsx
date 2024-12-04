import React from "react";
import '../styles/main.css';
import Footer from "../components/Footer";
import Section from "../components/Section";
import NewItems from "../components/newitems";
import EditItems from "../components/edititems";
import { NewPicture } from "../components/newpictures";
import ProfilePicture from "../components/profilepicture";

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <Section title="Add New Puppies / Family">
          <NewItems />
        </Section>
        <Section title="Update Puppies / Family">
          <EditItems />
        </Section>
        <Section title="Camera Roll Management">
          <NewPicture />
        </Section>
        <Section title="Profile Picture">
          <ProfilePicture />
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
