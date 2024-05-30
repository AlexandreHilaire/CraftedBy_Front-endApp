import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUploadsStore = defineStore('uploads', () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const results = ref(null);
  
  async function MindeeCheck (file) {
  
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${apiUrl}/parse-file`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      results.value = response.data;
      console.log(results.value);
    }
    catch (error) {
      console.log('error uploading file', error);
    }
  }

  return {MindeeCheck, results};
});