const LeftSidebar = () => {
  return (
      <aside className='debug w-[305px]'>
          <div className="flex flex-col debug">
            <a href="profile pic">pic</a>
            <span>Name</span>
            <span>Role</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span>key:</span>
              <span>value</span>
            </div>
          </div>
          <div>
            <div>Title</div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <span>skill</span>
                <span>progress</span>
              </div>
              <span>bar</span>
            </div>
          </div>
          <div>
            <span>pr langs</span>
          </div>
          <div>
            <span>extra skills</span>
          </div>
      </aside>
  )
}

export { LeftSidebar };