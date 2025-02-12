<template>
    <div class="center-container">
      <img
        src="https://raw.githubusercontent.com/saintcalico/webprogMI231-personal-website/midterm_draft/home/pingu.png"
        alt="Centered PNG"
        class="center-image"
      />
  
      <h1>HI <br />I'M FELIZ!</h1>
  
      <div class="folder-content-container">
        <div id="about" class="folder-content" v-if="activeFolder === 'about'">
          <p>
            I'm an aspiring software engineer currently studying in Asia Pacific
            College, enrolled in an undergrad program which is Bachelor of Science
            in Information Technology with a specialization in Internet and Mobile
            Technologies.<br />
            Random facts about me: I have a dog with a human name, I'm an only
            child.
          </p>
        </div>
  
        <div id="it-experience" class="folder-content" v-if="activeFolder === 'it-experience'">
          <ul>
            <li>
              I previously worked on "CropSurplus" with my colleague Isaac
              Estabillo, it's an e-commerce app for overproduced goods.
            </li>
            <li>
              I also worked on "FurBnB" with my colleagues Lalainne Andaya, Atasha
              Doria, and Michelle Pineda, it's an app for booking pet services.
            </li>
          </ul>
        </div>
  
        <div id="education" class="folder-content" v-if="activeFolder === 'education'">
          <ul>
            <li>Dean's Lister (A.Y. 2023-2024)</li>
            <li>
              Graduated With Honors - Pasay City National Science High School
              (A.Y. 2022-2023)
            </li>
          </ul>
        </div>
  
        <div id="interests" class="folder-content" v-if="activeFolder === 'interests'">
          <ul>
            <li>
              I'm interested in films, you can add me on Letterboxd
              "ihatefilmsboo".
            </li>
            <li>I'm also interested in books, add me on Goodreads!</li>
          </ul>
        </div>
  
        <div id="gallery" class="folder-content" v-if="activeFolder === 'gallery'">
          <div class="gallery-container">
            <figure v-for="photo in photos" :key="photo.name">
              <img :src="photo.url" :alt="photo.name" />
              <figcaption>{{ photo.name }}</figcaption>
            </figure>
          </div>
        </div>
  
        <div id="goals" class="folder-content" v-if="activeFolder === 'goals'">
          <strong>Goals</strong>
          <ul>
            <li>
              My goal is to literally just get through my classes at this point.
              For now I don't have a long-term goal.
            </li>
          </ul>
          <strong>References:</strong>
          <ul>
            <li>
              <a href="https://www.w3schools.com/vue/">Vue.js Documentation</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_functions.asp">JavaScript Functions</a>
            </li>
          </ul>
        </div>
  
        <div id="contact" class="folder-content" v-if="activeFolder === 'contact'">
          <p>Contact Me!</p>
          <form @submit.prevent="addEntry">
            <div>
              <p>
                Your Name: <br />
                <input
                  type="text"
                  v-model="name"
                  placeholder="Enter your name"
                  required
                />
              </p>
              <p>
                What are your thoughts about this website? <br />
                <input
                  type="text"
                  v-model="message"
                  placeholder="Enter your thoughts and opinion"
                  required
                />
              </p>
              <button type="submit">Submit</button>
            </div>
          </form>
          <p v-if="confirmationMessage" class="confirmation">
            {{ confirmationMessage }}
          </p>
        </div>
      </div>
  
      <div class="folders left">
        <div class="folder" @click="activeFolder = 'about'">
          <img
            src="https://raw.githubusercontent.com/saintcalico/webprogMI231-personal-website/midterm_draft/home/file.png"
            alt="Folder"
          />
          About me
        </div>
        <div class="folder" @click="activeFolder = 'it-experience'">
          <img
            src="https://raw.githubusercontent.com/saintcalico/webprogMI231-personal-website/midterm_draft/home/file.png"
            alt="Folder"
          />
          IT experience
        </div>
        <div class="folder" @click="activeFolder = 'education'">
          <img
            src="https://raw.githubusercontent.com/saintcalico/webprogMI231-personal-website/midterm_draft/home/file.png"
            alt="Folder"
          />
          Education
        </div>
        <div class="folder" @click="activeFolder = 'interests'">
          <img
            src="https://raw.githubusercontent.com/saintcalico/webprogMI231-personal-website/midterm_draft/home/file.png"
            alt="Folder"
          />
          Interests
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        message: "",
        confirmationMessage: "",
        activeFolder: "about",
        photos: [
          { name: "Image 1", url: "fel2.jpg" },
          { name: "Image 2", url: "fel1.jpg" },
        ],
      };
    },
    methods: {
      addEntry() {
        if (this.name && this.message) {
          this.confirmationMessage = "Thank you for your feedback!";
        }
      },
    },
    mounted() {
      console.log("Vue component loaded!");
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/styles.css";
  </style>
  
  