import Button from '@/components/Button';
import { LeftSidebar } from '@/components/LeftSidebar';

const Index = () => {
  return (
    <div className='bg-black h-screen flex gap-[30px]'>
      <LeftSidebar />      
      <main className='debug w-full'>
        <section className='flex flex-row'>
          <div className='flex flex-col'>
            <span>Title</span>
            <span>Desc</span>
            <Button text='CLICK'></Button>
          </div>
          <a>pic</a>
        </section>
        <section>
          <div className='flex flex-col'>
            <span>Header</span>
            <span>Description</span>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
            <div className='flex flex-col debug'>
              <a href="">picf</a>
              <span>title</span>
              <span>more</span>
            </div>
          </div>
        </section>
        <section></section>
        <footer></footer>
      </main>
      <aside className='debug w-[97px]'>
        <span>Links</span>
        
      </aside>
    </div>
  );
};

export default Index;