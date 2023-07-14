import React from 'react'

export default function index() {
  return (
      <>
        <div className="card">
            <div className="card-body">
              <div className="card-title">STANDARD</div>
              <div className="price">
                <span className="currency">Rp</span><span className="value">2.000</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This basic package covers the marketing needs of small startups
              </p>
              <ul className="space-y-2 text-left list mb-7">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Subsribe</a>
              </div>
            </div>
          </div>
      </>
  )
}
