import React from 'react'
import BasicScreen from './components/screen/BasicScreen'
import ProfileScreen from './components/screen/ProfileScreen'
import SkillSheetScreen from './components/screen/SkillSheetScreen'
import WorksScreen from './components/screen/WorksScreen'

function App() {
  return (
    <>
      {/* 基本情報 */}
      <BasicScreen />
      {/* 自己紹介 */}
      <ProfileScreen />
      {/* 保有スキル */}
      <SkillSheetScreen />
      {/* 作品集 */}
      <WorksScreen />
    </>
  )
}

export default App
