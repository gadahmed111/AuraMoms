import TheHeader from '../Navbar/Navbar';
import SimpleAccordion from './TheAcc'
export default function FAQPage() {
  return (
    <div className="dark:text-white">
    <TheHeader></TheHeader>
    <h2 className='mt-7 ml-5 text-3xl'>Frequently asked questions</h2>
    <div className="AccPage">
        <SimpleAccordion></SimpleAccordion>
    </div>
    </div>
  )
}
