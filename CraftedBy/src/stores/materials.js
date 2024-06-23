import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMaterialsStore = defineStore('materials', () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const materials = ref([]);

  async function getMaterials() {
    const response = await axios.get(`${apiUrl}/materials`);
    materials.value = response.data;
  };

  async function createMaterial(material_name){
    await axios.post(`${apiUrl}/materials`, {material_name});
  };

  return {getMaterials, createMaterial, materials};
}); 