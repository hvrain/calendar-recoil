import React, { useState } from "react";
import { Flex, Modal, TextInput, UnstyledButton } from "@mantine/core";
import { format, getDate } from "date-fns";
import { useForm } from "@mantine/form";

type Props = {
  date: Date;
};

const TodoFormModal: React.FC<Props> = ({ date }) => {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      todo: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={format(selectedDate, "y-MM-DD")}
      >
        <TextInput
          placeholder="write todo"
          withAsterisk
          {...form.getInputProps("todo")}
        />
      </Modal>

      <Flex justify="flex-end">
        <UnstyledButton onClick={() => setOpened(true)}>
          {getDate(date)}
        </UnstyledButton>
      </Flex>
    </>
  );
};

export default TodoFormModal;
