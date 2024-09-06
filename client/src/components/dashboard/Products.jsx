

export const Products = () => {
  
  const [menu,setMenu] = useState("All")
  const [cards,setCards] = useState(1)

/*  const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
  //				setNewProduct({ ...newProduct, image: reader.result });
          console.log(reader.result);
};

			reader.readAsDataURL(file); // base64
		}

	};
 */ 
  
  
  return (
    <div>

      <input type="file" 
        onChange={handleImageChange}
      />



    </div>
  )
}
