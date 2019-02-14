import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class Table extends React.Component{
    getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTable: {
            paper: {
              boxShadow: "none",
            },
          }
        }
      })

    render(){
        const { beers } = this.props;
        const columns = ["Name", "Alcohol By Volume", "Style", "Ounces"];
        const options = { print: false, download: false, filter: false, responsive: 'scroll', selectableRows: false };

    return(
        <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
            title={"Beer List"}
            data={beers.map(item =>
                {
                    return [
                        item.name,
                        item.abv,
                        item.style,
                        item.ounces
                    ]
                })}
            columns={columns}
            options ={ options }
      />
      </MuiThemeProvider>
    )
    }
}

export default Table;