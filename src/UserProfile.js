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
          <h4 className='userBio-Intro'>Personal Information</h4>
          <p>
            Name
            <span>Bassey Victor</span>
          </p>
          <p>Phone Number
          <span>08180387593</span>
          </p>
          <p>Email Address
          <span>victor@mail.com</span>
          </p>
          <p>BVN
          <span>225545552211</span>
          </p>
          <p>Gender
          <span>Male</span>
          </p>
          <p>Marital Status
          <span>Single</span>
          </p>
          <p>Children
          <span>None</span>
          </p>
          <p>Type of Residence
          <span>Semi-duplex</span>
          </p>
        </article>

        <article>
          <h4 className='userBio-Intro'>Education and Employment</h4>
          <p>Level of Education
          <span>B.Sc</span>
          </p>
          <p>Employment status
          <span>Employed</span>
          </p>
          <p>Sector of Employment
          <span>FinTech</span>
          </p>
          <p>Duration of Employment
          <span>2 Years</span>
          </p>
          <p>Office Email
          <span>Official@mail.com</span>
          </p>
          <p>Monthly Income
          <span>N170,000</span>
          </p>
          <p>Loan Repayment
          <span>N70,000</span>
          </p>
        </article>

        <article>
          <h4 className='userBio-Intro'>Socials</h4>
          <p>Twitter
          <span>victorbassey@99</span>
          </p>
          <p>Facebook
          <span>bassey victor</span>
          </p>
          <p>Instagram
          <span>@victorbassey</span>
          </p>
          
        </article>

        <article>
          <h4 className='userBio-Intro'>Guarantor</h4>
          <p>Full Name
          <span>Gilbert Adesola</span>
          </p>
          <p>Phone Number
          <span>08125412685</span>
          </p>
          <p>Email Address
          <span>Gilbert@mail.com</span>
          </p>
          <p>Relationship
          <span>Brother</span>
          </p>
        </article>
     </section>
    </div>
  );
}

export default UserInfo;
