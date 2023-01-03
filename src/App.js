import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='Parentbox'>
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Nike Sport" category="LEBARAN"/>
    </div>
  );
}
function FotoProduk() {
  return (
    <div className='Foto'>
      <img src='shoes.jpg'></img>
    </div>
  );
}
function CheckDiscount(props) {
  const { isDiscount } = props;
  if(isDiscount == "yes") {
    return (
      <p>Diskon 50% off</p>
    );
  } 
  else if(isDiscount == "coming") {
    return (
      <p>Akan ada diskon ...</p>
    );
  }
  else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}
function ProdukInfo(props) {
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"]
  const listBenefit = benefits.map((itemBenefit) => 
    <li>{itemBenefit}</li>
  );
  return (
    <div className='Deskripsi'>
      <p className='Cate'>{category}</p>
      <h1 className='Title'>{name}</h1>
      <p className='Price'>IDR 1.200.000</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className='Info'>
        Sneaker berwarna merah, untuk olahraga, ada berbagai ukuran bisa untuk pria dan wanita.
      </p>
      <ul>
        {listBenefit}
      </ul>
      <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart</a>
    </div>
  );
}
function TambahCart(e) {
  console.log("Membeli " + e)
}

export default App;
