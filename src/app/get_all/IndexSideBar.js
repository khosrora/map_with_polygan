'use client';
import GuideList from '@/components/GuideList';
import React, { useState } from 'react'
import AddDroneModal from './AddDroneModal';
import GetListDrones from './GetListDrones';

import TabsSideBar from '@/components/TabsSideBar';


function IndexSideBar() {

  const [state, setState] = useState(1)


  return (
    <div className='w-full h-full bg-white p-4' dir='rtl'>
      <TabsSideBar
        state={state}
        setState={setState}
      />
      {
        state === 1 ?
          <GuideList />
          :
          <GetListDrones />
      }

      <AddDroneModal />
    </div>
  )
}

export default IndexSideBar