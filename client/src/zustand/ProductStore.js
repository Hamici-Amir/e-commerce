import { create } from "zustand";
import axios from "axios";

const API_URL =  "http://localhost:5000/api/posts/";

export const useProductStore = create((set) => ({
    products: [],
	loading: false,
    setProducts: (products) => set({ products }),
    createProduct: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post(`${API_URL}/create`, productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
			}));
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	
	



}))