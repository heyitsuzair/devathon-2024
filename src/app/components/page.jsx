"use client"
import { ActionsWrapper, Avatar, BadgePill, BreadcrumbsBG, ButtonIconned, ButtonOutlined, ButtonPlain, CircularProgressBar, CreatedAt, DataTablePlain, DeleteIcon, FancyBox, FancyImage, Flex, Footer, FullPageLoader, Grid, InputFile, InputPlain, InputWrapper, Modal, Navbar, RenderHtml, Section, SelectPlain, SpinnerLarge, SpinnerMedium, SpinnerSmall, TabsUnderlined, TextareaPlain, UpdatedAt, ViewIcon, ViewImageModal } from '@/components'
import IconButton from '@/components/IconButton'
import Logo from '@/components/logo'
import React from 'react'

const ComponentsPage = () => {
  const rows = ["1", "2", '3', "4",]
  const columns = [2, 5, 6, 7, 7]
  return (
    <div className=''>
        <div>
          Avatar
          <Avatar firstName={"Shahzad"} lastName={"Ali"} backgroundColor={"blue"}/>
        </div>
        <div>
          Badge pill // bar with text
          <BadgePill text={"Percentage"}/>
        </div>
        <div>
          Breadcrumbs background // shows where you are
          <BreadcrumbsBG cameTo={"breads crumbs backgroung / Hero section"} />
        </div>
        <div>
          Buttons 
          <ButtonIconned text={"Button"} isRounded={true} onClick={()=>{console.log("new button")}}/>
          <ButtonOutlined text={"Button"}/>
          <ButtonPlain text={"Button"}/>
        </div>
        <div className='border-2 rounded-md border-gray-500 m-4'>
          explain how to use this table
          {/* <ActionsWrapper /> */}
          // data table plain
          <DataTablePlain rows={rows} columns={columns} title='data table plain'/>
          {/* <DeleteIcon onClickDelete={()=>{console.log("Delete icon")}}/> */}
          {/* <ViewIcon/> */}

        </div>
        <div>
          // fancy box, fancy image
          <FancyBox/>
          <FancyImage image={"../../../public/images/logo.jpg"}/>
        </div>
        // flex
        <Flex>
          <div>helo</div>
          <div>helo</div>
          <div>helo</div>
          <div>helo</div>
        </Flex>
        // grid
        <Grid>
          <div>helo ji</div>
          <div>helo ji</div>
          <div>helo ji</div>
          <div>helo ji</div>
        </Grid>
        // icon button
        <IconButton icon={"S"} text={"Shahzad"} bgColor={"blue"} borderColor={"black"}/>

        <div>
          / input file 
          <InputFile/>
          {/* <InputPlain/> */}
          {/* <InputWrapper placeholder={"enter your name"} name={'shahzad'}/> */}
          {/*
          <SelectPlain/>
          <TextareaPlain/> */}
        </div>

        {/* <div className='w-24 h-24'>
          <FullPageLoader isVisible={true}/>
        </div> */}
        / Circular progress bar
        <div><CircularProgressBar progress={70}/></div>
        /Section
        <Section>
          <div>Hello</div>
          <div>Hello</div>
        </Section>
        / spinners
        <SpinnerLarge/>
        <SpinnerMedium/>
        <SpinnerSmall/>

        /modal 
        <Modal/>
        /tabs TabsUnderlined
        <TabsUnderlined/> 
        {/*
          <RenderHtml/>

          <Logo/>
          
          <ViewImageModal/>

          <CreatedAt/>
          <UpdatedAt/>

        */}
    </div>
  )
}

export default ComponentsPage