import './widgetLg.css';

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle"> Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTr">Customer</th>
                    <th className="widgetLgTr">Date</th>
                    <th className="widgetLgTr">Amount</th>
                    <th className="widgetLgTr">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Cornol</span>
                    </td>
                    <td className="widgetLgDate">2 June, 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Cornol</span>
                    </td>
                    <td className="widgetLgDate">2 June, 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Cornol</span>
                    </td>
                    <td className="widgetLgDate">2 June, 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Cornol</span>
                    </td>
                    <td className="widgetLgDate">2 June, 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Susan Cornol</span>
                    </td>
                    <td className="widgetLgDate">2 June, 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;