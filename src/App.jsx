import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Rootlayout from './Pages/Root/Rootlayout'
import Expenses from './Pages/Expenses/Expenses'
import SmsAlert from './Pages/SmsAlert/SmsAlert'
import Investments from './Pages/Investments/Investments'
import Setting from './Pages/Setting/Setting'
import Fiat, { fiatLoader } from './Pages/Income/Fiat'
import Crypto from './Pages/Income/Crypto'
import Total from './Pages/Income/Total'
import IncomeLayout from './Pages/Root/IncomeLayout'
import Income from './Pages/Income/Income'
import FiatExpenses from './Pages/Expenses/FiatExpenses'
import CryptoExpenses from './Pages/Expenses/CryptoExpenses'
import TotalExpenses from './Pages/Expenses/TotalExpenses'
import ExpenseLayout from './Pages/Root/ExpenseLayout'
import SmsAlerLayout from './Pages/Root/SmsAlerLayout'
import All from './Pages/SmsAlert/All'
import Mentions from './Pages/SmsAlert/Mentions'
import Completed from './Pages/SmsAlert/Completed'
import FiatInvestment from './Pages/Investments/FiatInvestment'
import CryptoInvestment from './Pages/Investments/CryptoInvestment'
import TotalInvestment from './Pages/Investments/TotalInvestment'
import InvestmentLayout from './Pages/Root/InvestmentLayout'

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<Rootlayout/>}>
      <Route index element={<Income/>}/>
      
      <Route path='Income' element={<IncomeLayout/>}>
        <Route index element={<Fiat/>} loader={fiatLoader}/>
        <Route path='Fiat' element={<Fiat/>} loader={fiatLoader}/>
        <Route path='Crypto' element={<Crypto/>}/>
        <Route path='Total' element={<Total/>}/>
      </Route>


      
      <Route path='Expenses' element={<ExpenseLayout/>}>
          <Route index element={<FiatExpenses/>}/>
          <Route path='FiatExpenses' element={<FiatExpenses/>}/>
          <Route path='CryptoExpenses' element={<CryptoExpenses/>}/>
          <Route path='TotalExpenses' element={<TotalExpenses/>}/>
      </Route>

      <Route path='SmsAlert' element={<SmsAlerLayout/>}>
         <Route index element={<All/>}/>
         <Route path='All' element={<All/>}/>
         <Route path='Mentions' element={<Mentions/>}/>
         <Route path='Completed' element={<Completed/>}/>
      </Route>

      <Route path='Investments' element={<InvestmentLayout/>}>
        <Route index element={<FiatInvestment/>}/>
        <Route path='FiatInvestment' element={<FiatInvestment/>}/>
        <Route path='CryptoInvestment' element={<CryptoInvestment/>}/>
        <Route path='TotalInvestment' element={<TotalInvestment/>}/>
      </Route>


     
      <Route path='Setting' element={<Setting/>}/>

    </Route>
  ))
  return (
    <RouterProvider router ={router}/>
  )
}
