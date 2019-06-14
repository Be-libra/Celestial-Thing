import React from 'react';
import './Categories.css';

const Categories =({onCategoryclick}) =>{
	return(
		<div className='view'>
			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow "
			onClick={()=>onCategoryclick('Space')} >
				  <div className="dtc v-mid">
				    <img src="https://fsmedia.imgix.net/7c/64/de/56/fb79/497e/b8ca/d146bcdd00ab/space-genetics-is-essential-making-life-in-space-work.jpeg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Space</h2>
				    <h4 className="lh-copy">
				      Beyond the edge of the world there’s a space where emptiness and substance neatly overlap,
				       where past and future form a continuous, endless loop.
				       And, hovering about, there are signs no one has ever read, chords no one has ever heard.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design shadow-6 grow" 
				onClick={()=>onCategoryclick('SolarSystem')} >
				  <div className="dtc v-mid">
				    <img src="https://www.brecorder.com/wp-content/uploads/2018/01/solar-system.jpg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Solar-System</h2>
				    <h4 className="lh-copy">
				      In more than one respect, the exploring of the Solar System and homesteading
				       other worlds constitutes the beginning, much more than the end, of history.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Moons')}>
				  <div className="dtc v-mid">
				    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/three_moons-wallpaper-1600x900.jpeg?efZW2CqKaZmviFCu.jLjvnYvY00SRBqc" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Moons</h2>
				    <h4 className="lh-copy">
				      The moon is friend for the lonesome to talk to.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Sun')}>
				  <div className="dtc v-mid">
				    <img src="https://wp-assets.futurism.com/2013/10/sun-07.jpg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>sun</h2>
				    <h4 className="lh-copy">
				      I believe in Christianity as I believe that the sun has risen: not only because 
				      I see it, but because by it I see everything else.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow "
				onClick={()=>onCategoryclick('Stars')}>
				  <div className="dtc v-mid">
				    <img src="https://cdn-images-1.medium.com/max/1200/1*n8ODb1OAe6ygCtABI18e7Q.png" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>stars</h2>
				    <h4 className="lh-copy">
				      The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, 
				      the carbon in our apple pies were made in the interiors of collapsing stars.
				       We are made of starstuff.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Galaxies')}>
				  <div className="dtc v-mid">
				    <img src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/b5/e2/50/shutterstock-576050593.jpg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    
				   <h2 className='lh-copy blue'>Galaxies</h2>
				   <h4 className="lh-copy">
				     The near side of a galaxy is tens of thousands of light-years closer to us than 
				      the far side; thus we see the front as it was tens of thousands of years before the back. But typical events in galactic dynamics occupy tens of millions of years, so the error in thinking of an image of a galaxy as frozen in one moment of time is small.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Planets')}>
				  <div className="dtc v-mid">
				    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXFxcXGBcXGBcVFxUXFxUXFxUXFxcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQFSsdHR0tLS0tLS0tLSsrLSstLS0tKy0rLS0tLS0tLS0tLS0tKystLS0rLS0tLS0rLS0rLS0tLf/AABEIAL8BBwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADoQAAEDAgQDBQUGBgMBAAAAAAEAAhEDIQQSMUEFUWEGE3GBkSKhscHwBzKC0eHxQlJicrLCFDNDNP/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjETQSIyQmEE/9oADAMBAAIRAxEAPwD4kExoSwmsH1zumRzbBA5EAiIVETlUhqOF0IDmhGGrmhNa1NNpWRFlVynTsi7lXMU+StRpSYTu56J2Ho3Ct1cPr0V44dIyy7UG0wnuoCBzUFqdh2SQE5CtV+5RtoBWcRQymN0BZZHifkSGhC6mE7KhyqdGAM9UtzU8Bc8SEaABWhV31JKNzEGRK7PpXqSgyiDeDaBGs632hWagVZ4U2LgCoKMLmxeRfa8Rca2vaeSkyijqAAw12YWvBGoBIg3sZHku0vE+P6ICUwjMhlSShSNDkKMhCkAwuUqEg4JrD9apYCY1EM1iZEoaYTg1XE0tzVLAm5V2VAAGq1QpSlNatHB0/aBOkhXjO0ZXoD6JAujpHZaNfEUiC3u7z96TNuhVVtJpd7F/G3l1W2teqx8tzuJpUgCE+pS9/uRdyc3u8CNui3MFwYlgc5pI6DRXMds8spO3mn4UjS4T+G0QagB3Xp6eBY58aNHP68V1bhjGPEHYHSNRIVfF9l8nWlHHcEzOGS46eElY+KwLmkiDZelocTdSdb08l2PxHfDMI20HxTywlLHKz28i6nGyFjVrV6Sqmgsbi3mSiaamFYfThVqpU+j9gMckl7UZK58pW7VIqVmKs5qu4hVciyq4WQgIVlzBzS3dEaPZBQFOfT3t4b7befuKAtSMpQmZFEJDYCohEuQAuC5TC5LR7QExqAI2oM+kFcp0yVTpuV3D14VxnXGkQppMCc5wKiIVaLaA0K/SbAmNPiqmHaJ/Y/FXGNdGiuIyptPDisXQYdrGgPOCuwmEGYZzG8aldg3hohxvOgWhQ1Byy3xvrz8QtMZKzythuFwHt5gfZmx5+S9Pge9FmzB2Fh5wrPCcHTq03PYCHNj2DofNb/BMDmsYzDbn4Lomse3Jll5daZ2P4K0tY77rjrHPn1VXiDfYgtbLW5Q7nAN457LZ7R9scDg/YqVWveLGkyKr2mLAgGGH+4jZfOuM/aS15Pc4SBzqP18WMH+yznPirHi5L9LjeHGZtCk4Y6NE/BeWrdu8W7+Gg3wpu+byuodvMW0/doO8aZ+Twl82LecOf+PQYjAEQS2J36XCpvoJbPtCDxlr4Uf3UnEejXj/AGWpw3iODxBhlXK4izKgyPJ5CTDvwkomWGXqnrLGdxi16RWZVbJXruIYAtHtiIEC0LzVZsHSFHJjo8MtqrqEAl07C3qPgoJBHJWqpBbfXqqcA6LGtoU9hJkqs4BWqgkR6byqxbtukomoUBCeKZPJeh4b2VfWoVKwjKwCbibm1t0C3TyeUnRLIVzE0cphVy1I4W4ISmEIXBIy3IURCJ9MCIcDIkxIymT7JkXOhta6kwNYSCRoNel4XKQ1SnothCNrUICYwJQCYE2nCElSxMj2lNFUH69yVTpk6qct9VZLdGNyr2BrHSFQoU+q08NRMiJV4s8nNwzi8lb2F4cYac2szbQzFjvaD5of+NBa6Lb/AJLf/wCdSw9A1qtmtEjm4n7rW8ydP2W+OOnNnnb6WsLiqeCol+IflpE3/me4aMaBdx+tAvA9pe3VfEyyjOHoaZWmKjx/W8X/AAtt4rC41xipi6neVLAWYwfdpt5DrpJ39AKIKwzz8m/HwzHu+0taBopJQkoS5Zt0oSozKMyA4qCJRKEjbXC+0lWmAyoTVpi0OMuaP6HH4G3gvQig2uzvaXtN3jVp5OGxuPVeFWhwTi9TC1M9M2Ih7f4ajf5T8jt7lrjn9X0xz4994+29XpiILZ9yzqtKCCNPdPJel4q5lakytSMteNNC138TXRo4FYFUOaMt+Y5yqzxiMMtxTdCS6naVcpAu10Gp3KKpSFyJjeNp5rPxa7Z5kAKzS4k9rS0OIB2SqgQOYUjJqPJKAmxEXtflrIjrb0TCEDghRGVQKZJgAkkwBqSTojKiCpMNSmQS0ggiQQRBBFiCNkCZlvMqHMuggLlxXJkBoRtUNRNUqEE2jqghHTTJ7bs7wfD1aFV76oY5rZa2/tGRZeXx1IA2I96CniSARdQakm6tGtHUQTBXruAYKSJ8YXmsFQkAmImJ66wvdcHZlAsZI5/LxC0xmu2XLetNGlwF50bE7L5t2y4p31fumGaVElo5OeLPd8h4Hmvq3aTijsLgKtYGHluRh1h7/ZB8QJd+FfCqRhHJndaTwYd+QnCLKMy5xQlYupJKBxXEoUjjpUyhRBI0olC5MnFSpC4phsdnOJ9y8sf/ANdSxm+V2jXx7j0PRXsZQIcTJI6W8PBeYXpcNi+9ot/maMpPOLX8RB81UvWmdx72qta7TZTVpxuddOY6+71ThTJm4AAm9puBbmb6eKVXPmgyXU99gYPKbx8CuAO6Jg5T+qNzY8EAh1MQqz2p9V5SUGUpyfXJGU2iwc0tHtFHCE7Lq+DIJsvf9huEUqz2tqPAB3v80rt3wilRqObTe0gXlV4xO3zioxcrNdg5qFJs4FMagARBZqpsImJbSnigRCqEbRYTZWqeFjXVJY6NNU9lSVpIi1pcNc3MGkRcXXvsFh6ZIDXTABJG3KIXzvCBlpMQV6vguLiMsfy/qujGXxc3J7M+1/ExQw1Eb56p8QAxnuL18tBXu/tWql1alOjcOz1L6hXg2rly9unin4RJUOUyhcVKwroUQVwCFJCkBcpQSQpXKCUASlAHI0wEha3Z6vHeN6Bw8jB+I9FlFX+zomvHNjh8D8k8facvTRqVSgLlerUulp+H7qtiCQIV3FEqs1+QyNQmtrwHS0OkQL/dMi4jXQjldKcJSnpGh4nRKc1Na0oCiQwU6RcYHU6gaCTqpYYXOSiizQbWA4o6nEFDxPiTnkyZusgVLoKtVHl0NJquXJOZQpMl64ISUw/IaRy6LNRlFslWq7psFUpaq0RKuJqKDoKv1G2kLPFMzZaQpOIkD66BaYoyKpuWpw3FQQsq4sdUyg+FpMtIuO2p20LnljnDWkAPwucR8V5FrV6ziVTvaTTqWW8j+seq8q4LLk/bbTj/AFkCTCGUUqIWbQBR5V2VTPRAc1sKfNRqiyphBCiFIBRHkgBhE5cW8lORBBK0ey//ANF9mOPuA+aofBafZelerU2ADZ8TJ/xHqqwn5Qs/1rZqvgpVZkgyBtBvb0t+y4mTf3JVaoRoQZ5WA20C30wipXbAm8TZVyVaqmUhwUXFcqQ7SQLeU+JF0oOvbr118UJculBiKQ5MLkl6WRwJKFzTuCJvfcHfwUn9z8Leqh5POfkOSzUioegFhpv18VCAuUpbBB8I9fn9WRhLCY1RFUxqs0J0AzEiBuRcG0b7eZVdpTqbryFcTVmjbVauErQRlF+olZ1KXXV6hRgePJbYs8gYumc0lKbF7XkQZsBeRG+3orzQIgj9Ep2HI0IIVXC3uFMjcJT+8LGxHQ8onyWBxClDrbrfFF0kztJjrfZdXwPesJGoF/zUZY3Sscu3mHNhCFbxWHLRB2VRZNHQidsuC4INMKdVKkJk4AqbKVCAGVxKkpZKQc82XtOAYQU8OGukOJL3fi0HkAAvO8FwXe1JcPYZBd1Ozfz6L0tbEX6rq4MP6rDmy/mOdSZeNVmVmXT6laNVVruJMytcrEYwmrZVXlOrPKSR5rHL2uFQoITCUBaoWEoHIygISpgQOKYUpxWdOAcuUFcpUSmMHJJRA2+tPFRtR7U5irU3x9fNOY5VKWmzhHfeIFuWseZTG4g7WVDCPMTKY+pGi2mTOw9+LJtZdmPNVmEXkGdoMQetriJsm00/ItLuGxJ0JWhhMQA7RZgAjraCIAAAgiIvNr/GVza5sLa67/X5rWZ9aqLi0OK4IOGZvmvMYnDQV6KhjYI5aKcXgg+7L9FGXF94qxz+q8louBV3FYMjZUXNIWDUwFGwpAcmNcgGqCUOdQXgapgSdw/APrvysFhdztmDmfkN1rcK7MVqsPqg0afNwh7h/S06eJ969DWFKizu6QytGvMnmTuVtx8NveXUZ5Z66ij3TaTAxlgNzq47k9SqL6nVWa+IBVCtUW+Vn0xk2irUJSKjjqjp3IWtiOC1G0hULSGkmDtssfbT0xS2QgKJzIUZkAqETjZGhq3mLdOSXoK7lGZS5iHu95WdW7KgcxG5AQgEVGrkTlKzsVtRlSEIROHWeomPfdZtBtTg6VXamsKcC0yqYhMYSqzXRoml5JuTz9d1cqbFlhO/NXKdrqlTrwFPfkq5UWLb68KG6KpnTe9VSlo5q1eG1QFid4ruDeZC048tVGeO49UGUarYqsBPPQ+oWXjOy9Fx9iqW/wBzQ73iEqrUdaCrLMXsRfx+YXRfHL3GM8sfVZDuxtU3ZUpkTvmH+pTm9gcT/FVoNH9zyfTKtvDYxwPTlK0Kddz3dCif8/HVfLmjs59klOr7VfFuiJy0mBs/jeT/AIrUq8GwWA/6KIzj/wBHnvHz0c77v4QFYwfFO6AuRe3huqmMqh5nWfq4Sx4ccMttPK2dsXifEiScx0+rLAxdcuutDi9M5p2WbVbGqnPO2pkVXH65JT3I3qu4rPZnUKmUi69Fie09V+HbRLvYaTA5TC8oXJ1IzqYgE3+CUp6HWfKSSOXipBXIJNNoM3AgTeb9BA1S6gXF6B70rVQJchcURISyFnVIe5BlRELikCYUoiFCRs5EEM7fX1opWLUQTAUoIwmDWOTs07/Q0VYFGHJwLDSplIDkYKqVJoKLN6IQpLU9kaKqtYepeyoBqsUSqlKxqNqEXKsU6wMFZ1KsDEo2Vr+a6ceRjcXog5uWfBaeE9lskrCouda3XTUc/BXsZjIAb0uumZdbR49ixOMvY3SanEHCDJBFxyIWc45iIF/GZ/JS4karHLO1rIdiMdmAzaqpj6oMHoqmKfyVfvFhlkcgnXSHhOBgqKwGx/fdH0SsQpCOFzacpSDYQUxt0LmXSnlG9D2Y+mQhIkdVDa3NcXWR1R2DKolA5xQZlG1aE5QHLiUOZI0kwuUOUJBnBEhCILFqkJuaYBOlh7z8ylBEEyEpC4RA1mb8otHnr7l0pgTUbZQAqUwtUbp4YALFVGOUzCZCc6EQrWQEgpJKNhaa7dW6b5A5rPpAkK5QMFVjU5N7A4wgxUBMNhsmIt7POwJ0Q1699lnvrDXohbXm5K6ZyammXj9rorQZC0KD21ZLjlgLCZiACnOxAAslvZpxbIJG2yqT5dEZrBIqOvZZ1UPASn2U06/NRWcEgXnThUVXOEWcJzIrBVH3SXFOJbCAwiiFSolQShLlCklAZupc5LLkqbsy7MgJXBynZ6MFRckucpRsaf/Z" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Planets</h2>
				    <h4 className="lh-copy">
				      Let's be clear. The planet is not in jeopardy. We are in jeopardy.
				       We haven't got the power to destroy the planet - or to save it. 
				       But we might have the power to save ourselves.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Satellites')}>
				  <div className="dtc v-mid">
				    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1092541985%2F960x0.jpg%3Ffit%3Dscale" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3 ">
				    <h2 className='lh-copy blue'>Satellite</h2>
				    <h4 className="lh-copy">
				      Satellite technology is a wonderful thing. From space, we can stare down and look 
				      at perimeter fences, huts, mine entrances and even sites of mass graves.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Asteroids')}>
				  <div className="dtc v-mid">
				    <img src="https://www.scienceabc.com/wp-content/uploads/2015/09/Asteroid.jpg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Asteroids and Meteors</h2>
				    <h4 className="lh-copy">
				      Pretty soon man will out live his usefulness. When that happens...well...
						remember what happened to the dinosaurs.
				    </h4>
				  </div>
			</div>

			<div className="dt mw6 center pv3 pv4-m pv4-ns design grow"
				onClick={()=>onCategoryclick('Universe')}>
				  <div className="dtc v-mid">
				    <img src="http://gameofglam.com/wp-content/uploads/2017/06/Spiral-1000x600.jpg" alt="A bright blue sky" className="mw5" />
				  </div>
				  <div className="dtc v-mid pl3">
				    <h2 className='lh-copy blue'>Universe</h2>
				    <h4 className="lh-copy">
				     Two possibilities exist: either we are alone in the Universe or we are not.
				      Both are equally terrifying.
				    </h4>
				  </div>
			</div>
		</div>	


		);

}

export default Categories;