void moveZeroes(int *nums, int numsSize)
{
    int i, next_avail_slot = 0;
    for (i = 0; i < numsSize; i++)
        // move it at next_avail_slot if not zero
        if (nums[i] != 0)
            nums[next_avail_slot++] = nums[i];
    for (i = next_avail_slot; i < numsSize; i++)
        nums[i] = 0; // fill the rest with 0
}