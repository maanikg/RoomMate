import Nav from '../components/Nav'
import {useState} from 'react'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        last_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "man",
        url: "",
        about: "",
        matches: [],
        program: "",
        residence: "Chestnut Residence",
        noise_level: "",
        wakeup: "",
        sleep: "",
        graduation_date: "",
        //hobbies: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        sports: false,
        videogames: false,
        reading: false,
        boardgame: false,
        music: false,
        photography: false,
        traveling: false,
        cookingbaking: false,
        paintingdrawing: false,
        gardening: false,
        hikingcamping: false,
        dancing: false,
        yoga: false,
        fitness: false,
        singing: false,
        moviestv: false,
        writing: false
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder=""
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                         <label htmlFor="last_name">Last Name</label>
                        <input
                            id="last_name"
                            type='text'
                            name="last_name"
                            placeholder=""
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
                        /> 

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Male</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Female</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === "more"}
                            />
                            <label htmlFor="more-gender-identity">Other</label>
                        </div>
                        <label>Roommates Preferred Gender</label>

                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === "man"}
                            />
                            <label htmlFor="man-gender-interest">Male</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === "woman"}
                            />
                            <label htmlFor="woman-gender-interest">Female</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === "everyone"}
                            />
                            <label htmlFor="everyone-gender-interest">Other</label>

                        </div>
                        
                        <label htmlFor="about">About me (300 words max)</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks..."
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <label htmlFor="program">Program of study</label>
                        <input
                            id="program"
                            type='text'
                            name="program"
                            placeholder="Computer Engineering"
                            required={true}
                            value={formData.program}
                            onChange={handleChange}
                        />

                        {/* <label htmlFor="program">Residence</label>
                        
                        
                            <input
                            id="residence"
                            type='text'
                            name="residence"
                            placeholder="Chestnut Residence"
                            required={true}
                            value={formData.residence}
                            onChange={handleChange}
                        />  */}
                           

                     <label>Residence</label>
                        <div className="multiple-input-container">
                            <input
                                id="chestnut-residence"
                                type="radio"
                                name="residence"
                                value="Chestnut Residence"
                                onChange={handleChange}
                                checked={formData.residence === "Chestnut Residence"}
                            />
                            <label htmlFor="chestnut-residence">Chestnut Residence</label>

                            <input
                                id="innis-residence"
                                type="radio"
                                name="residence"
                                value="Innis College"
                                onChange={handleChange}
                                checked={formData.residence === "Innis College"}
                            />
                            <label htmlFor="innis-residence">Innis College</label>

                            <input
                                id="new-residence"
                                type="radio"
                                name="residence"
                                value="New College"
                                onChange={handleChange}
                                checked={formData.residence === "New College"}
                            />
                            <label htmlFor="new-residence">New College</label>

                            <input
                                id="stMichael-residence"
                                type="radio"
                                name="residence"
                                value="St. Michael's College"
                                onChange={handleChange}
                                checked={formData.residence === "St. Michael's College"}
                            />
                            <label htmlFor="stMichael-residence">St.Michael's College</label> 

                            <input
                                id="trinity-residence"
                                type="radio"
                                name="residence"
                                value="Trinity College"
                                onChange={handleChange}
                                checked={formData.residence === "Trinity College"}
                            />
                            <label htmlFor="trinity-residence">Trinity College</label> 

                            <input
                                id="university-residence"
                                type="radio"
                                name="residence"
                                value="University College"
                                onChange={handleChange}
                                checked={formData.residence === "University College"}
                            />
                            <label htmlFor="university-residence">University College</label> 

                            <input
                                id="victoria-residence"
                                type="radio"
                                name="residence"
                                value="Victoria College"
                                onChange={handleChange}
                                checked={formData.residence === "Victoria College"}
                            />
                            <label htmlFor="victoria-residence">Victoria College</label> 

                            <input
                                id="woodsworth-residence"
                                type="radio"
                                name="residence"
                                value="Woodsworth College"
                                onChange={handleChange}
                                checked={formData.residence === "Woodsworth College"}
                            />
                            <label htmlFor="woodsworth-residence">Woodsworth College</label> 



                        </div>  


                        <label htmlFor="program">Accepted noise level while studying (from 1 to 5)</label>
                        <input
                            id="noise_level"
                            type='number'
                            name="noise_level"
                            placeholder=""
                            required={true}
                            value={formData.noise_level}
                            onChange={handleChange}
                        />

                        <label htmlFor="program">What time do you wake up? (6am-11am)</label>
                        <input
                            id="wakeup"
                            type='number'
                            name="wakeup"
                            placeholder=""
                            required={true}
                            value={formData.wakeup}
                            onChange={handleChange}
                        />

                        <label htmlFor="program">What time do you fall asleep? (8pm-1am)</label>
                        <input
                            id="sleep"
                            type='number'
                            name="sleep"
                            placeholder=""
                            required={true}
                            value={formData.sleep}
                            onChange={handleChange}
                        />


                        <label htmlFor="program">Year of study (1-4)</label>
                        <input
                            id="graduation_date"
                            type='number'
                            name="graduation_date"
                            placeholder=""
                            required={true}
                            value={formData.graduation_date}
                            onChange={handleChange}
                        />

                        <label>Hobbies</label>
                        <div className="multiple-input-container-2">

                            <div className="small-container-1">
                            <div class="Hobbies">
                                <input  id="sports"
                                type="checkbox"
                                name="sports"
                                onChange={handleChange}
                                checked={formData.sports}/>
                                <span>  Sports</span>
                            </div>
                           
                            <div class="Hobbies">
                                <input  id="videogames"
                                type="checkbox"
                                name="videogames"
                                onChange={handleChange}
                                checked={formData.videogames}/>
                                <span>  Video Games</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="reading"
                                type="checkbox"
                                name="reading"
                                onChange={handleChange}
                                checked={formData.reading}/>
                                <span>  Reading</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="boardgame"
                                type="checkbox"
                                name="boardgame"
                                onChange={handleChange}
                                checked={formData.boardgame}/>
                                <span>  Board Games</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="music"
                                type="checkbox"
                                name="music"
                                onChange={handleChange}
                                checked={formData.music}/>
                                <span>  Music</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="photography"
                                type="checkbox"
                                name="photography"
                                onChange={handleChange}
                                checked={formData.photography}/>
                                <span>  Photography</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="traveling"
                                type="checkbox"
                                name="traveling"
                                onChange={handleChange}
                                checked={formData.traveling}/>
                                <span>  Travelling</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="cookingbaking"
                                type="checkbox"
                                name="cookingbaking"
                                onChange={handleChange}
                                checked={formData.cookingbaking}/>
                                <span>  Cooking</span>
                            </div>
                            </div>

                            <div className="small-container-2">
                            <div class="Hobbies">
                                <input  id="paintingdrawing"
                                type="checkbox"
                                name="paintingdrawing"
                                onChange={handleChange}
                                checked={formData.paintingdrawing}/>
                                <span>  Painting/Drawing</span>
                            </div>

                          


                            
                            <div class="Hobbies">
                                <input  id="gardening"
                                type="checkbox"
                                name="gardening"
                                onChange={handleChange}
                                checked={formData.gardening}/>
                                <span>  Gardening</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="dancing"
                                type="checkbox"
                                name="dancing"
                                onChange={handleChange}
                                checked={formData.dancing}/>
                                <span>  Dancing</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="yoga"
                                type="checkbox"
                                name="yoga"
                                onChange={handleChange}
                                checked={formData.yoga}/>
                                <span>  Yoga</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="fitness"
                                type="checkbox"
                                name="fitness"
                                onChange={handleChange}
                                checked={formData.fitness}/>
                                <span>  Fitness</span>
                            </div>
                            
                            <div class="Hobbies">
                                <input  id="singing"
                                type="checkbox"
                                name="singing"
                                onChange={handleChange}
                                checked={formData.singing}/>
                                <span>  Singing</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="moviestv"
                                type="checkbox"
                                name="moviestv"
                                onChange={handleChange}
                                checked={formData.moviestv}/>
                                <span>  Movies/TV</span>
                            </div>

                            <div class="Hobbies">
                                <input  id="writing"
                                type="checkbox"
                                name="writing"
                                onChange={handleChange}
                                checked={formData.writing}/>
                                <span>  Writing</span>
                            </div>
                            </div>
                        </div>

                        <input type="submit"/>

                        
                    </section>

                    <section>

                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>


                    </section>

                </form>
            </div>
        </>
    )
}
export default OnBoarding