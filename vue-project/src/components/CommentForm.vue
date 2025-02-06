<template>
    <div>
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
    <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required class="form-control">
    </div>
    <div class="form-group">
    <label for="comment">Comment:</label>
    <textarea id="comment" v-model="comment" required class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <div v-if="submissionStatus" class="mt-2">
              {{ submissionStatus }}
    </div>
    </form>
    </div>
    </template>
    <script setup>
      import { ref } from 'vue';
      import { supabase } from '../lib/supabaseClient'
     
      
      const name = ref('');
      const comment = ref('');
      const submissionStatus = ref(null);
      // Your Supabase URL and Key - IMPORTANT!
      const tableName = 'comments'; // Name of your Supabase table
      async function submitComment() {
        submissionStatus.value = "Submitting...";
        try {
          const { error } = await supabase
            .from(tableName)
            .insert([{ name: name.value, comment: comment.value }]);
          if (error) {
            console.error("Error inserting comment:", error);
            submissionStatus.value = "Error submitting comment. Please try again.";
          } else {
            submissionStatus.value = "Comment submitted successfully!";
            name.value = ''; // Clear form fields
            comment.value = '';
          }
        } catch (err) {
          console.error("An unexpected error occurred:", err);
          submissionStatus.value = "An unexpected error occurred. Please try again later.";
        }
      }
    </script>
    <style scoped>
    /* Basic styling - Customize as needed */
    div {
      max-width: 400px; /* Limit the container's width */
      margin: auto; /* Center the container */
      padding: 1rem; /* Add padding around the container */
      border: 1px dashed #000; /* Keep the dashed border for visibility */
      background-color: #fffbea; /* Light yellow background */
    }
    
    h2 {
      text-align: center; /* Center the heading */
    }
    
    .form-group {
      margin-bottom: 1rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .form-control {
      width: 100%; /* Ensure the input fields don't exceed the container's width */
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box; /* Include padding in the element's total width/height */
    }
    
    .btn {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: block;
      margin: auto; /* Center the button */
    }
    </style>