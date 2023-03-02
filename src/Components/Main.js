import React from 'react'
import { Card } from './Card'

export const Main = () => {

    return (
        <>
            <div className="header">

                {/* Inserindo imagens  */}
                <div className="bg">
                    <img src="./Images/bg.jpg" alt="background" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.jpg" alt="logo" />
                    <input type="search" placeholder="Search Here" className='search' />
                </div>

            </div>
            <div className="content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>

    )
}
