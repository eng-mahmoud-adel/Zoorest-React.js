import React from 'react';
import {Card, Row} from "react-bootstrap";

const AddArticle = () => {

    var alloyEditor = AlloyEditor.editable('myContentEditable', {
        toolbars: {
            styles: {
                selections: [{
                    name: 'text',
                    buttons: ['styles', 'bold', 'italic', 'underline', 'link'],
                    test: AlloyEditor.SelectionTest.text
                }],
            tabIndex: 1
        }
    }})

    var content = alloyEditor.get('nativeEditor').getData();

    return (
        <Card id="myContentEditable" className="add-article-card">
            <Card.Body>
                <Card.title>
                    Hot Looks: A Fun, Random Beauty Report Straight From The Closet
                </Card.title>

                <Card.Text>
                    You love having a second home but the mortgage is putting a crater in your wallet. Many second home owners turn to renting their property as a vacation rental to help defray the costs of ownership. How do you price a vacation home rental without overcharging but making enough to cover your costs? Do your research.Find out what other owners of, similar sized homes in the area are charging. You can ask a local real estate agent for a price range, scan local papers or go online. There are also vacation rental sites like eVaca.com. These types of sites have advertisements from owners around the world and weekly rates for the properties are listed.
                </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>
    )
}

export default AddArticle;
