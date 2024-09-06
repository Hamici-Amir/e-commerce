

export const Cards = ({data}) => {
  return (
    <div className="grid  grid-cols-3  gap-4   ">
        {[1,2,3,4,5,6,7,8,9].map(() =>  <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://res.cloudinary.com/dbctizaae/image/upload/v1725395214/products/ah8iwhpfzwf2krpfldeo.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> )}
           




    </div>
  )
}
