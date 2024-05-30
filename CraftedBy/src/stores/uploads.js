import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUploadsStore = defineStore('uploads', () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const mindeeResults = ref(null);
  
  // * Mindee IDCards checker
  async function MindeeCheck (file) {
  
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${apiUrl}/parse-file`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      mindeeResults.value = response.data;
    }
    catch (error) {
      console.log('error uploading file', error);
    }
  }

  return {MindeeCheck, mindeeResults};
});