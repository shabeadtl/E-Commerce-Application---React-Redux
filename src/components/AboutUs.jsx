import React from 'react'
import logo from "../assets/sha_kart_logo.png";

export default function AboutUs() {
  return (
    <div>
      <div className="container " style={{ marginTop: '80px' }}>
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <div>
              <h2 className="card-title text-center mb-4">About Sha Kart</h2>
              <img src={logo} alt="" style={{ height: '50px', margin: '50px' }} />
            </div>
            <p className="card-text">
              Welcome to <strong>Sha Kart</strong>, your one-stop destination for quality
              products at prices that won’t break the bank. We are more than just an
              online store – we are a brand that values trust, convenience, and the joy
              of hassle-free shopping. At <strong>Sha Kart</strong>, our mission is to
              provide a smooth, reliable, and enjoyable shopping journey with customer
              satisfaction as our top priority.
            </p>

            <p className="card-text">
              Our team is passionate about curating the latest collections across
              categories, making sure you always have access to products that fit your
              lifestyle. From everyday essentials to trending must-haves, we focus on
              offering a variety that meets the needs of every shopper. With quick
              delivery, secure payment options, and excellent customer support, we ensure
              your experience remains seamless from browsing to checkout.
            </p>

            <p className="card-text">
              What makes us different? It’s our commitment to quality and trust. Every
              product goes through a careful selection process so that you get nothing but
              the best. Our vision is to build a community of happy customers who see
              <strong> Sha Kart </strong> not just as a store, but as a trusted shopping
              companion for years to come.
            </p>

            <p className="card-text">
              Thank you for choosing <strong>Sha Kart</strong>. We’re excited to serve
              you today, tomorrow, and always. Shop with confidence, discover new
              favorites, and enjoy the joy of online shopping at its finest.
              🛒 Happy Shopping!
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
