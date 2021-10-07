import moment from "moment";
import {Button} from "react-bootstrap";

const TablePrograms = ({total, items, deleteItem}) => {

    return(
      <>
          <div>Total programs: {total}</div>

          <table className="table table-dark table-hover">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">id</th>
                  <th scope="col">Program name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Cancelled</th>
                  <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {
                  typeof items !== 'undefined'
                      ?
                      items.map((program, index) => {
                          const startsAt = moment(program.startsAt).format('MMMM Do YYYY, h:mm a').toString();
                          const endsAt = moment(program.endsAt).format('MMMM Do YYYY, h:mm a').toString();
                          const canceledAt = moment(program.canceledAt).format('MMMM Do YYYY, h:mm a').toString();

                          return  <tr key={program.id}>
                                      <th scope="row">{index + 1}</th>
                                      <td>{program.id}</td>
                                      <td>{program.name}</td>
                                      <td>{startsAt}</td>
                                      <td>{endsAt}</td>
                                      <td>
                                          {
                                              program.canceledAt !== null?
                                                  canceledAt : 'Program Activ'
                                          }
                                      </td>
                                        <td>
                                            <Button onClick={() => deleteItem(program.id)} type="button" className="btn btn-danger">Delete</Button>
                                        </td>

                                 </tr>
                      })
                      : null
              }
              </tbody>
          </table>
      </>
    );
}

export default TablePrograms;