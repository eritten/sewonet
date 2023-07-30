import { React, useState, useEffect}  from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Main = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
  axios.get('http://localhost:8000/post/')
  .then((res) => {
    setData(res.data);
    
    setTotalPages(Math.ceil(res.data.length / itemsPerPage));
  })
  .catch((err) => {
    console.log(err);
  });
  },

[]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
  setCurrentPage(selectedPage.selected);
  };
  return (
  <>
  <Header/>
    <main>
      <div className="main-wrapper">
      {/* main blogs section */}
      <div className="recent-blog-sec">
        <h1 className="title">Latest Blog Post</h1>
        <div className="recent-blog-wrapper">

{/* start the fetch here */}
{subset.map((blog) => (
  <>
   {/* start */}
    <div className="recent-blog-box shadow" tabIndex="0">
      <figure className="img-box">
        <img src={blog.image} alt="image" />
      </figure>
      <div className="content-box">
        <Link className="tag-name">#tag{blog.id}</Link>
        <Link className="blog-title" key={blog.id} to="/details">{blog.title}</Link>
        <p className="blog-text">{blog.description}</p>
        <div className="author-box">
          <h5 className="author">{blog.author}</h5>
          <p className="date">{blog.date_created}</p>
        </div>
      </div>
    </div>
    {/* end */}
  </>
))}
<ReactPaginate
pageCount={totalPages}
onPageChange={handlePageChange}
forcePage={currentPage}/>

{/* end the fetch here */}
         
        
        </div>
      </div>
      {/* end of main blogs section */}
      {/* sidebar section */}
      <div className="sidebar-sec">

        <div className="content-wrapper">
          <h2 className="title">tags</h2>
          <div className="box">
            <div className="tag">
              <a href="#n">#tag1</a>
            </div>
            <div className="tag">
              <a href="#n">#tag2</a>
            </div>
            <div className="tag">
              <a href="#n">#tag3</a>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <h2 className="title">visit us</h2>
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facilis laboriosam, nemo earum pariatur consequuntur impedit porro! Expedita, commodi.</p>
            <div className="social-box">
            <a href="#" className='all-btns' aria-label='sewonet Facebook link'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className='all-btns' aria-label='sewonet Twitter link'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className='all-btns' aria-label='sewonet Instagram link'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
          </div>
        </div>
        <div className="content-wrapper newsletter">
          <h2 className="title">Newsletter</h2>
          <div className="box">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptatum voluptates ratione, corrupti.</p>
            <form action="#">
              <input type="email" placeholder='email' required/>
              <input type="submit" value="subscribe" className='all-btns' />
            </form>
          </div>
        </div>

      </div>
      {/* end of sidebar section */}
      </div>
    </main>
    </>
  )
}

export default Main