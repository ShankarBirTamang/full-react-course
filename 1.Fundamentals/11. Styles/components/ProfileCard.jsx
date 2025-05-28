
const ProfileCard = () => {
    const styles = {
        container: {
            backgroundColor: 'lightGray',
            padding : '15px',
            borderRadius : '8px',
            color : 'black'
        }
    }
  return (
    <div style={styles.container}>
      <p>
        1. Create a new file called `ProfileCard.jsx`.
        <br/>
        2. Inside this file, create a functional component called `ProfileCard`.
        <br/>
        3. Define a `styles` object to hold the CSS properties:
        <br/>
        <br/>
        <div>
        - Set the background color to light gray.
        <br/>
        - Set padding to `15px`.
        <br/>
        - Set border radius to `8px`.
        <br/>
        - Set text color to black.
        <br/>
        </div>
        <br/>

        4. Apply the `styles` object to the  &lt;div&gt; using the `style` attribute.
        <br/>

        5. Render a  &lt;div&gt; with a title and description inside it.
      </p>
    </div>
  )
}

export default ProfileCard
