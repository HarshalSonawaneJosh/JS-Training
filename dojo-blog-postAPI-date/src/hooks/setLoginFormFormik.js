import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  useQuery,
  useMutation,
  queryClient,
  useQueryClient,
} from "react-query";
import { postTodo } from "../services/todoServices";

const SetLoginFormFormik = ({ onSuccess }) => {
  return useMutation(postTodo, {
    onSuccess: onSuccess,
  });
};

export default SetLoginFormFormik;
