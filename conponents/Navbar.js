import { Tabs, Grid, Image, Button, Text } from "@geist-ui/core"
import logo from "./../public/vercel.svg"

const Navbar = () => {
    return (
        <Grid.Container>
            <Tabs initialValue="html" hideDivider hideBorder justify="center">
                <Button auto type="abort">About</Button>
                <Button auto type="abort">Blog</Button>
                <Button auto type="abort">Projects</Button>
            </Tabs>
            <Image src="/logo.svg" alt="logo"/>
            <Tabs initialValue="html" hideDivider hideBorder justify="center">
                <Button auto type="abort" onClick={()=> window.open('https://github.com/danielchim')}>Github</Button>
                <Button auto type="abort" onClick={()=> window.open('https://twitter.com/herself_66')}>Twitter</Button>
                <Button auto type="abort" onClick={()=> window.open('https://www.behance.net/kahungchim')}>Behance</Button>
            </Tabs>
        </Grid.Container>
    )

}

export default Navbar;