import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from "./styles";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormData {
  task: string;
  minutesAmount: number;
}

const CreateNewSchema = yup
  .object({
    task: yup.string().required(),
    minutesAmount: yup.number().required(),
  })
  .required();

export function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<IFormData>({
      resolver: yupResolver(CreateNewSchema),
    });

  function handleCreateNewCycle(data: IFormData) {
    console.log(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountdownButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
