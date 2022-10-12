import './style.css'

function UserInfo() {
  return (
    <div className='profile-container'>
     <section className="user-bio">
      <div className='bio-intro'>
          <div>Name</div>
          <div>Name</div>
          <div>Name</div>
      </div>
      <div className='bio-nav'>
        <ul>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
     </section>
     <section className="user-details">
        <article>
          <h4>Personal Information</h4>
          <p>Name</p>
          <p>Phone Number</p>
          <p>Email Address</p>
          <p>BVN</p>
          <p>Gender</p>
          <p>Marital Status</p>
        </article>
        <article>
          <h4>Education and Employment</h4>
        </article>
        <article>
          <h4>Socials</h4>
        </article>
        <article>
          <h4>Guarantor</h4>
        </article>
     </section>
    </div>
  );
}

export default UserInfo;
