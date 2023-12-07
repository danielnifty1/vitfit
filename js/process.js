    onload=async function(){

     // alert("dd")

     var url = `${serverurl}/api/v1/program/`
			// console.log(data)
			fetch(url, {
				method: 'GET',  // body: JSON.stringify(),
				headers,

			})
               
     .then((res) => {
     return res.json();
 })
 .then((completedata) => {
    const info = completedata.data
    // console.log(info)
const dispalyLenght=completedata.data.length
    let data1 = "";

    let properties = [...completedata.data]
            const numofdisplay = properties.splice(properties.length - Math.round((properties.length / 2)), dispalyLenght)
            const numofdisplay2 = properties.splice()

            //  console.log(numofdisplay2)

             numofdisplay.map((values) => {

                data1 += `
                <div class="col-md-4 col-lg-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
          <div class="block-7">
            <div class="text-center" style="min-height: 400px; background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
            url(${values.images[0].url});background-repeat: no-repeat;background-position:center ;background-size: cover;border-radius:10px;width:auto">
              <span class="excerpt d-block" style="padding:10px;color:white;font-weight:bold">${values.title}</span>
              <span class="price"><sup>$</sup> <span class="number">${values.cost}</span></span>
              <p  style="padding:10px;color:white" >${values.note}</p>
              <a href="book-appointment.html" class="btn btn-primary d-block px-2 py-3">Get Started</a>
            </div>
          </div>
        </div>`



            })
            document.getElementById('showdata').innerHTML = data1

 },

 )



    // approaches

    // await fetch("approaches.json")

    var url = `${serverurl}/api/v1/approach/`
    // console.log(data)
    fetch(url, {
      method: 'GET',  // body: JSON.stringify(),
      headers,

    })
      .then((res) => {
        return res.json();
      })
      .then((completeservicedata) => {

        const info = completeservicedata.data
        const dispalyLenght = completeservicedata.data.length
        let dataApproach = "";


        let approachesProperty = [...info]

        const approahesDisplayed = approachesProperty.splice(approachesProperty.length - Math.round((approachesProperty.length / 1)), dispalyLenght)
        const approahesDisplayed2 = approachesProperty.splice()

        // console.log(approachesProperty)

        approahesDisplayed.map((vals) => {
            // console.log("appr"+vals)

          dataApproach += ` 
            <div class="col-md-4 col-sm-6  d-flex" >
        <div class="services text-center"  >
          <div style="min-height: 400px; background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
      url(${vals.images[0].url});background-repeat: no-repeat;background-position:center ;background-size: cover;border-radius:10px;width:auto">
          
          <div class="text pt-20" style="" >
            <h2 style="color:#e1193e;padding:40px;font-size: 20px">${vals.title}</h2>
            <p style="color:white;font-weight: bold">${vals.note}</p>
          </div>
          </div>
        </div>
      </div>
          
              `


          // progama.innerHTML=dataApproach;
        })
        document.getElementById('approach').innerHTML = dataApproach

      },


      )

  }

  // TRAINER
  
    // console.log("this is ")


    var url = `${serverurl}/api/v1/about/`
    // console.log(data)
    fetch(url, {
      method: 'GET',  // body: JSON.stringify(),
      headers,

    })
      .then((res) => {
        return res.json();
      })
      .then((completeservicedata) => {

        const info = completeservicedata.data
        // console.log("this is ")





        document.getElementById('note').innerHTML = info.note
        document.getElementById('img2').src = info.image.url
        document.getElementById('thetrainer').src = info.image.url





      },


      )

  


      // Gallery

      var url = `${serverurl}/api/v1/gallery/`
      // console.log(data)
      fetch(url, {
          method: 'GET',  // body: JSON.stringify(),
          headers,

      })
          .then((res) => {
              return res.json();
          })
          .then((completeservicedata) => {

              const info = completeservicedata.data
              const dispalyLenght = completeservicedata.data.length
              let dataApproach = "";


              let approachesProperty = [...info]

              const approahesDisplayed = approachesProperty.splice(approachesProperty.length - Math.round((approachesProperty.length / 1)), approachesProperty.length)
              const approahesDisplayed2 = approachesProperty.splice()

              //  console.log("this is "+approachesProperty)

              approahesDisplayed.map((vals) => {
                  // console.log(vals)
                  dataApproach += ` 

                  <div class="col-md-6 col-lg-3 d-flex">
                  <div class="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <a href="${vals.image.url}" class="block-20 img d-flex align-items-end"
                      style="background-image: url('${vals.image.url}');">
                    </a>
                    <div class="text">
                     
                      <h3 class="heading mb-3"><a href="#">${vals.title}</a></h3>
                      <p>${vals.note}</p>
                    </div>
                  </div>
                </div>
      `
                  // progama.innerHTML=dataApproach;
              })
              document.getElementById('gallery').innerHTML = dataApproach
              
          },


          )




        //   transformation
        var url = `${serverurl}/api/v1/transformation/`
			// console.log(data)
			fetch(url, {
				method: 'GET',  // body: JSON.stringify(),
				headers,

			})
				.then((res) => {
					return res.json();
				})
				.then((completeservicedata) => {

					const info = completeservicedata.data
					const dispalyLenght = completeservicedata.data.length
					let dataApproach = "";


					let approachesProperty = [...info]

					const approahesDisplayed = approachesProperty.splice(approachesProperty.length - Math.round((approachesProperty.length / 1)), approachesProperty.length)
					const approahesDisplayed2 = approachesProperty.splice()

					//  console.log("this is "+approachesProperty)

					approahesDisplayed.map((vals) => {
						// console.log(vals.image.url)
						dataApproach += ` 

                        <div class="col-md-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
                        <div class="classes-wrap img d-flex align-items-end" style="background-image: url(${vals.image.url});">
                          <div class="text">
                            <span class="price">VitFit</span>
                            <h2><a href="#">Transformation</a></h2>
                          </div>
                        </div>
                      </div>
			`

			
						// progama.innerHTML=dataApproach;
					})
					document.getElementById('transform').innerHTML = dataApproach
					
				},


				)


  
