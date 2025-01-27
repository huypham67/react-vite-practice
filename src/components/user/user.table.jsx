import { Table } from "antd";

const UserTable = (props) => {
    const { dataUsers } = props;
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    return (
        <div>
            <Table dataSource={dataUsers} columns={columns} rowKey={"_id"} />
        </div>
    )

}

export default UserTable;