import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import JobCard from "./components/JobCard/JobCard"
import Navbar from "./components/Navbar/Navbar"
import SearchBar from "./components/SearchBar/SearchBar"
import jobData from "./jobDummyData"
import { collection, query, where, getDocs, orderBy} from "firebase/firestore";
import {db} from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"))

    const req = await getDocs(q);
    req.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({ ...doc.data(), id: doc.id,
        postedOn: doc.data().postedOn.toDate()
       }); // Fix: Changed job to doc
    });
    setJobs(tempJobs);
  };


  const fetchJobsCustom = async (jobCriteria) => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef,where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title),where("experience", "==", jobCriteria.experience),where("location", "==", jobCriteria.location),orderBy("postedOn", "desc"))

    const req = await getDocs(q);
    req.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({ ...doc.data(), id: doc.id,
        postedOn: doc.data().postedOn.toDate()
       }); // Fix: Changed job to doc
    });
    setJobs(tempJobs);
  };
  

  useEffect (() => {
    fetchJobs()
  }, [])

  return (
    <>
      <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
     
      </div>
    </>
  )
}

export default App
