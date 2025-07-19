import React from 'react'

function About() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        📂 Organize Notes by Subject
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       SmartDesk allows you to neatly arrange your digital notes into subject-wise folders. Whether you're managing academic subjects, work projects, or personal topics, this structure keeps everything in one place and easy to access — making your workflow smoother and more efficient.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        📝 Create and Edit Notes Easily
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Writing notes is effortless with SmartDesk’s clean and distraction-free editor. Add, update, or delete your thoughts in real-time, whether you're brainstorming ideas, tracking tasks, or preparing lecture summaries. Everything stays auto-synced and ready whenever you need it.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        📎 Upload and Store Important Files
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Attach files like PDFs, images, or documents to each subject folder. SmartDesk helps you store and retrieve important resources without digging through your computer. It’s your personal cloud shelf — organized, accessible, and clutter-free.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
