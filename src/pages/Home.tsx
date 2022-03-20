import { makeStyles } from "@material-ui/core";
import { Page } from "../components/Page";

const useStyles = makeStyles({
    root: {
    }
})

const Home: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <Page classes={{ root: classes.root }} > 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet congue sem, ac viverra est. Duis sit amet sollicitudin lorem. Fusce porttitor, mauris eget aliquet iaculis, sapien risus egestas lacus, a lobortis augue enim ut turpis. Quisque mattis justo nec accumsan commodo. Aenean fringilla, nunc et pulvinar hendrerit, ante lectus pretium nunc, vel vulputate tortor diam et lacus. Fusce quis nunc diam. Maecenas lobortis pellentesque nisl at scelerisque. Suspendisse lacinia nisl non dui dapibus euismod. Nam imperdiet lacus dui, ac faucibus diam posuere eu. Nunc eleifend nisl in neque pretium fringilla. Nulla non lectus eget mi mattis sollicitudin. Aliquam faucibus luctus lacus, vel vehicula felis fringilla ut.
            <br />
            Aliquam tempus finibus lectus ac tristique. Praesent pretium facilisis felis, vitae consectetur diam vestibulum sed. Suspendisse ut lectus elit. Aliquam a mauris est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc euismod turpis nunc, sed facilisis dolor gravida eget. Phasellus vestibulum, nisl sed placerat porttitor, nunc magna rutrum elit, sit amet facilisis ante dolor ac metus. Fusce bibendum leo facilisis augue aliquet auctor. Aliquam tincidunt porta facilisis. Fusce placerat eu mauris a tempus. Nullam lacinia enim turpis, id ornare mauris rhoncus a. Vestibulum aliquet, elit in ultricies vehicula, ex quam varius ante, non gravida sapien mi aliquet nibh.
            <br />
            Proin sed odio sed lacus ultricies lacinia at eu nibh. Vestibulum vulputate diam nec arcu tincidunt, ut tempor metus mollis. Fusce consectetur metus non nulla facilisis, pulvinar porttitor risus varius. Duis sollicitudin metus et est hendrerit dictum. Proin sit amet ipsum arcu. Proin sodales mattis ex, vel consectetur nulla molestie id. Ut condimentum risus in feugiat egestas. Pellentesque maximus nunc in molestie pulvinar. Ut efficitur justo at metus porta vulputate. Maecenas sapien metus, tempor a libero a, pretium tempor purus. Aenean ullamcorper sodales quam, quis porta lectus efficitur eu.
            <br />
            Mauris in metus eget magna tincidunt imperdiet eu id risus. Morbi ac magna convallis, condimentum tortor ac, aliquam neque. Vivamus tincidunt purus in turpis varius, at luctus dui viverra. Etiam sit amet quam eros. Vestibulum faucibus velit ipsum. Nulla sed eros ac tortor venenatis gravida. Donec fermentum libero vitae justo egestas, ac efficitur nibh dictum. Suspendisse lobortis ipsum sed neque sodales vehicula. Sed luctus dui et risus sodales tincidunt. Mauris et vestibulum nunc.
            <br />
            Duis lectus felis, consequat eget sapien non, porta mattis dui. Proin libero ligula, euismod quis nulla a, sagittis euismod risus. Proin tortor metus, pulvinar et rutrum nec, rutrum ut tortor. Proin gravida at nisl et ultricies. Duis sagittis vitae metus eu posuere. Aliquam fringilla est nec tellus luctus vestibulum. Praesent enim est, ullamcorper congue sem sit amet, fermentum dictum risus. Aliquam quis mi fringilla, interdum orci ac, mattis ipsum. Aliquam massa ipsum, dictum et nibh vel, laoreet tincidunt ligula. Ut et arcu eu dolor hendrerit ultricies. Sed metus augue, faucibus quis consectetur quis, aliquet ut velit. Praesent vitae dapibus nisl, in congue lacus. Integer vel neque vitae sem eleifend efficitur. Phasellus eget semper nibh.
        </Page>
    )
}

export default Home;