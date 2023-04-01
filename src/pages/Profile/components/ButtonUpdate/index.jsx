import { Button, Modal } from 'antd';
import { useState } from 'react';
import './style.scss';

const ButtonUpdate = props => {
  const { title, handleOnClickUpdate } = props;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(title);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Ok waitting...');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setModalText(title);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="btn btn-update"
        block
        size="large"
      >
        UPDATE
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={e => {
          handleOk();
          handleOnClickUpdate(e);
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default ButtonUpdate;
